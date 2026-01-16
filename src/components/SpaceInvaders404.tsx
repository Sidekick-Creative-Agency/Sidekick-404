import { useEffect, useRef, useState } from 'react';
import baneIcon from '../assets/bane_icon.svg';
import jokerIcon from '../assets/joker_icon.svg';
import riddlerIcon from '../assets/riddler_icon.svg';
import twoFaceIcon from '../assets/two_face_icon.svg';
import poisonIvyIcon from '../assets/poison_ivy_icon.svg';
import sidekickLogo from '../assets/sidekick-logo-icon-white.svg';
import notFoundImage from '../assets/404.svg';
import { ArrowRight, X } from 'lucide-react';
import userBullet from '../assets/user_bullet.svg';


interface Position {
    x: number;
    y: number;
}

interface Enemy {
    x: number;
    y: number;
    icon: string;
    alive: boolean;
}

interface Bullet {
    x: number;
    y: number;
    isPlayerBullet: boolean;
}

interface ConfettiParticle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    color: string;
    size: number;
    life: number;
    maxLife: number;
    radius: number;
}

const GAME_WIDTH = 1920; // Fixed game resolution width
const GAME_HEIGHT = 1080; // Fixed game resolution height
const PLAYER_SIZE = 50;
const ENEMY_SIZE = 40;
const BULLET_SIZE = 4;
const PLAYER_SPEED = 10;
const BULLET_SPEED = 15;
const ENEMY_DROP = 30;
const DUAL_SHOT_OFFSET = 25; // Distance between dual bullets
const SHOT_TIMER = 300;
const FAST_SHOT_TIMER = 50;

const enemyIcons = [
    baneIcon.src,
    jokerIcon.src,
    riddlerIcon.src,
    twoFaceIcon.src,
    poisonIvyIcon.src,
];

export default function SpaceInvaders404() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [gameStarted, setGameStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(1);
    const [level, setLevel] = useState(1);
    const [showInstructions, setShowInstructions] = useState(true);
    const [dualShot, setDualShot] = useState(false);
    const [fastShot, setFastShot] = useState(false);
    const [initials, setInitials] = useState('');
    const [initialsSubmitted, setInitialsSubmitted] = useState(false);

    const playerRef = useRef<Position>({ x: 0, y: 0 });
    const enemiesRef = useRef<Enemy[]>([]);
    const bulletsRef = useRef<Bullet[]>([]);
    const confettiRef = useRef<ConfettiParticle[]>([]);
    const keysRef = useRef<{ [key: string]: boolean }>({});
    const enemyDirectionRef = useRef(1);
    const lastShotTimeRef = useRef(0);
    const enemyShootTimerRef = useRef(0);
    const animationFrameRef = useRef<number>(null);
    const enemySpeedRef = useRef(1);
    const touchXRef = useRef<number | null>(null);
    const isTouchingRef = useRef(false);

    // Load images
    const playerImageRef = useRef<HTMLImageElement>(null);
    const enemyImagesRef = useRef<{ [key: string]: HTMLImageElement }>({});
    const bulletImageRef = useRef<HTMLImageElement>(null);

    // Check localStorage for upgrades
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const hasDualShot = localStorage.getItem('dualShot');
            const hasFastShot = localStorage.getItem('fastShot');

            if (hasDualShot) {
                setDualShot(true);
            }
            if (hasFastShot) {
                setFastShot(true);
            }
        }
    }, []);

    useEffect(() => {
        // Load player image
        const playerImg = new Image();
        playerImg.src = sidekickLogo.src;

        playerImageRef.current = playerImg;

        // Load enemy images
        enemyIcons.forEach((icon) => {
            const img = new Image();
            img.src = icon;
            enemyImagesRef.current[icon] = img;
        });

        // Load bullet image
        const bulletImg = new Image();
        bulletImg.src = userBullet.src;
        bulletImageRef.current = bulletImg;
    }, []);

    const initializeEnemies = (currentLevel: number) => {
        const enemies: Enemy[] = [];

        // Increase difficulty with each level
        const baseEnemyCount = 15 + (currentLevel - 1) * 5; // Start with 15, add 5 per level
        const enemySpeed = 1 + (currentLevel - 1) * 0.3; // Increase speed each level
        enemySpeedRef.current = enemySpeed;

        const maxX = GAME_WIDTH - 100;
        const maxY = GAME_HEIGHT * 0.4; // Top 40% of screen
        const minSpacing = ENEMY_SIZE + 20;

        // Generate random positions ensuring no overlap
        for (let i = 0; i < baseEnemyCount; i++) {
            let attempts = 0;
            let validPosition = false;
            let newX = 0;
            let newY = 0;

            while (!validPosition && attempts < 50) {
                newX = 50 + Math.random() * (maxX - 50);
                newY = 50 + Math.random() * (maxY - 50);

                // Check if position overlaps with existing enemies
                validPosition = enemies.every(enemy => {
                    const distance = Math.sqrt(
                        Math.pow(enemy.x - newX, 2) + Math.pow(enemy.y - newY, 2)
                    );
                    return distance >= minSpacing;
                });

                attempts++;
            }

            if (validPosition) {
                enemies.push({
                    x: newX,
                    y: newY,
                    icon: enemyIcons[Math.floor(Math.random() * enemyIcons.length)],
                    alive: true,
                });
            }
        }

        return enemies;
    };

    const startGame = () => {
        setGameStarted(true);
        setGameOver(false);
        setScore(0);
        setLives(1);
        setLevel(1);
        setInitials('');
        setInitialsSubmitted(false);
        playerRef.current = { x: GAME_WIDTH / 2 - PLAYER_SIZE / 2, y: GAME_HEIGHT - 80 };
        enemiesRef.current = initializeEnemies(1);
        bulletsRef.current = [];
        enemyDirectionRef.current = 1;
        lastShotTimeRef.current = 0;
        enemyShootTimerRef.current = 0;
    };

    const startNextLevel = () => {
        const nextLevel = level + 1;
        setLevel(nextLevel);
        setGameOver(false);
        playerRef.current = { x: GAME_WIDTH / 2 - PLAYER_SIZE / 2, y: GAME_HEIGHT - 80 };
        enemiesRef.current = initializeEnemies(nextLevel);
        bulletsRef.current = [];
        enemyDirectionRef.current = 1;
        lastShotTimeRef.current = 0;
        enemyShootTimerRef.current = 0;
    };

    const handleInitialsSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (initials.trim().length > 0) {
            setInitialsSubmitted(true);
            // Here you could save to localStorage or send to an API
            console.log('Player initials:', initials, 'Score:', score, 'Level:', level);
        }
    };

    const createConfetti = (x: number, y: number) => {
        // Extract colors from the enemy icon being hit
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const enemyImg = enemyImagesRef.current[enemiesRef.current.find(e => e.x === x && e.y === y)?.icon || ''];

        let colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#ffd93d', '#95e1d3', '#f38181']; // fallback colors

        if (ctx && enemyImg?.complete) {
            canvas.width = ENEMY_SIZE;
            canvas.height = ENEMY_SIZE;
            ctx.drawImage(enemyImg, 0, 0, ENEMY_SIZE, ENEMY_SIZE);

            try {
                const imageData = ctx.getImageData(0, 0, ENEMY_SIZE, ENEMY_SIZE);
                const pixels = imageData.data;
                const sampledColors: string[] = [];

                // Sample colors from the image (every 4th pixel to get variety)
                for (let i = 0; i < pixels.length; i += 16) {
                    const r = pixels[i];
                    const g = pixels[i + 1];
                    const b = pixels[i + 2];
                    const a = pixels[i + 3];

                    // Only include non-transparent, non-black, non-white pixels
                    if (a > 100 && (r > 30 || g > 30 || b > 30) && (r < 225 || g < 225 || b < 225)) {
                        sampledColors.push(`rgb(${r}, ${g}, ${b})`);
                    }
                }

                if (sampledColors.length > 0) {
                    colors = sampledColors;
                }
            } catch (e) {
                // If canvas is tainted (CORS), use fallback colors
                console.warn('Could not extract colors from enemy image');
            }
        }
        const particleCount = 15;

        for (let i = 0; i < particleCount; i++) {
            const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5) * 0.5;
            const speed = 2 + Math.random() * 3;
            confettiRef.current.push({
                x: x + ENEMY_SIZE / 2,
                y: y + ENEMY_SIZE / 2,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: 1 + Math.random() * 2,
                life: 1,
                maxLife: 10 + Math.random() * 20,
                radius: 2 + Math.random() * 3
                // + Math.random() * 20
            });
        }
    };

    const checkCollision = (obj1: Position, size1: number, obj2: Position, size2: number) => {
        return (
            obj1.x < obj2.x + size2 &&
            obj1.x + size1 > obj2.x &&
            obj1.y < obj2.y + size2 &&
            obj1.y + size1 > obj2.y
        );
    };

    const gameLoop = () => {
        if (!canvasRef.current || gameOver) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.imageSmoothingEnabled = false;

        // Clear canvas with transparency
        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

        // Update player position
        if (touchXRef.current !== null) {
            // Touch control - move toward touch position
            const targetX = touchXRef.current - PLAYER_SIZE / 2;
            const clampedTargetX = Math.max(0, Math.min(GAME_WIDTH - PLAYER_SIZE, targetX));
            const diff = clampedTargetX - playerRef.current.x;
            const moveSpeed = Math.min(Math.abs(diff), PLAYER_SPEED * 2);
            if (Math.abs(diff) > 2) {
                playerRef.current.x += Math.sign(diff) * moveSpeed;
            }
        } else {
            // Keyboard control
            if (keysRef.current['ArrowLeft'] && playerRef.current.x > 0) {
                playerRef.current.x -= PLAYER_SPEED;
            }
            if (keysRef.current['ArrowRight'] && playerRef.current.x < GAME_WIDTH - PLAYER_SIZE) {
                playerRef.current.x += PLAYER_SPEED;
            }
        }

        // Shoot bullet (keyboard or touch)
        if ((keysRef.current[' '] || isTouchingRef.current) && Date.now() - lastShotTimeRef.current > (fastShot ? FAST_SHOT_TIMER : SHOT_TIMER)) {
            if (dualShot) {
                // Shoot two bullets side by side
                bulletsRef.current.push({
                    x: playerRef.current.x + PLAYER_SIZE / 2 - DUAL_SHOT_OFFSET / 2 - BULLET_SIZE / 2,
                    y: playerRef.current.y,
                    isPlayerBullet: true,
                });
                bulletsRef.current.push({
                    x: playerRef.current.x + PLAYER_SIZE / 2 + DUAL_SHOT_OFFSET / 2 - BULLET_SIZE / 2,
                    y: playerRef.current.y,
                    isPlayerBullet: true,
                });
            } else {
                // Single bullet
                bulletsRef.current.push({
                    x: playerRef.current.x + PLAYER_SIZE / 2 - BULLET_SIZE / 2,
                    y: playerRef.current.y,
                    isPlayerBullet: true,
                });
            }
            lastShotTimeRef.current = Date.now();
        }

        // Draw player
        if (playerImageRef.current?.complete) {
            ctx.drawImage(
                playerImageRef.current,
                Math.floor(playerRef.current.x),
                Math.floor(playerRef.current.y),
                PLAYER_SIZE,
                PLAYER_SIZE
            );
        } else {
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(playerRef.current.x, playerRef.current.y, PLAYER_SIZE, PLAYER_SIZE);
        }

        // Update and draw enemies
        let moveDown = false;
        const aliveEnemies = enemiesRef.current.filter((e) => e.alive);

        aliveEnemies.forEach((enemy) => {
            enemy.x += enemySpeedRef.current * enemyDirectionRef.current;

            if (
                (enemy.x <= 0 && enemyDirectionRef.current < 0) ||
                (enemy.x >= GAME_WIDTH - ENEMY_SIZE && enemyDirectionRef.current > 0)
            ) {
                moveDown = true;
            }
        });

        if (moveDown) {
            enemyDirectionRef.current *= -1;
            enemiesRef.current.forEach((enemy) => {
                if (enemy.alive) {
                    enemy.y += ENEMY_DROP;
                    // Check if enemies reached player
                    if (enemy.y + ENEMY_SIZE >= playerRef.current.y) {
                        setGameOver(true);
                        setLives(0);
                    }
                }
            });
        }

        // Enemy shooting (more frequent on higher levels)
        const shootFrequency = Math.max(30, 60 - (level - 1) * 5);
        enemyShootTimerRef.current++;
        if (enemyShootTimerRef.current > shootFrequency && aliveEnemies.length > 0) {
            const randomEnemy = aliveEnemies[Math.floor(Math.random() * aliveEnemies.length)];
            bulletsRef.current.push({
                x: randomEnemy.x + ENEMY_SIZE / 2 - BULLET_SIZE / 2,
                y: randomEnemy.y + ENEMY_SIZE,
                isPlayerBullet: false,
            });
            enemyShootTimerRef.current = 0;
        }

        // Draw enemies
        enemiesRef.current.forEach((enemy) => {
            if (enemy.alive) {
                const enemyImg = enemyImagesRef.current[enemy.icon];
                if (enemyImg?.complete) {
                    ctx.drawImage(enemyImg, enemy.x, enemy.y, ENEMY_SIZE, ENEMY_SIZE);
                } else {
                    ctx.fillStyle = '#ff0000';
                    ctx.fillRect(enemy.x, enemy.y, ENEMY_SIZE, ENEMY_SIZE);
                }
            }
        });

        // Update and draw bullets
        bulletsRef.current = bulletsRef.current.filter((bullet) => {
            if (bullet.isPlayerBullet) {
                bullet.y -= BULLET_SPEED;
                if (bullet.y < 0) return false;

                // Check collision with enemies
                for (const enemy of enemiesRef.current) {
                    if (enemy.alive && checkCollision(bullet, BULLET_SIZE, enemy, ENEMY_SIZE)) {
                        enemy.alive = false;
                        createConfetti(enemy.x, enemy.y);
                        setScore((s) => s + (100 * level));
                        return false;
                    }
                }
            } else {
                bullet.y += BULLET_SPEED;
                if (bullet.y > GAME_HEIGHT) return false;

                // Check collision with player
                if (checkCollision(bullet, BULLET_SIZE, playerRef.current, PLAYER_SIZE)) {
                    setLives((l) => {
                        const newLives = l - 1;
                        if (newLives <= 0) {
                            setGameOver(true);
                        }
                        return newLives;
                    });
                    return false;
                }
            }

            // Draw bullet
            ctx.fillStyle = bullet.isPlayerBullet ? '#ffffff' : '#ffffff';
            // ctx.fillRect(bullet.x, bullet.y, BULLET_SIZE, BULLET_SIZE * 3);
            if (bullet.isPlayerBullet) {
                if (bulletImageRef.current?.complete) {
                    ctx.drawImage(bulletImageRef.current, bullet.x - 2, bullet.y - 2, 10, 16);
                } else {
                    ctx.fillStyle = '#00ffff';
                    ctx.fillRect(bullet.x, bullet.y, BULLET_SIZE, BULLET_SIZE * 3);
                }
            } else {
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(bullet.x, bullet.y, BULLET_SIZE, BULLET_SIZE * 3);
            }
            return true;

        });

        // Update and draw confetti
        confettiRef.current = confettiRef.current.filter((particle) => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.vy += 0.15; // gravity
            particle.life++;

            const alpha = 1 - (particle.life / particle.maxLife);
            if (alpha <= 0) return false;

            ctx.globalAlpha = alpha;
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fill();

            ctx.globalAlpha = 1;

            return true;
        });

        // Check win condition (level complete)
        if (aliveEnemies.length === 0) {
            setGameOver(true);
        }

        animationFrameRef.current = requestAnimationFrame(gameLoop);
    };

    useEffect(() => {
        if (gameStarted && !gameOver) {
            animationFrameRef.current = requestAnimationFrame(gameLoop);
        }

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [gameStarted, gameOver, score, lives, level, dualShot, fastShot]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === ' ') e.preventDefault();
            keysRef.current[e.key] = true;
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            keysRef.current[e.key] = false;
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    // Touch controls for mobile
    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;

        const getTouchX = (e: TouchEvent): number => {
            const touch = e.touches[0];
            const rect = canvas.getBoundingClientRect();
            const scaleX = GAME_WIDTH / rect.width;
            return (touch.clientX - rect.left) * scaleX;
        };

        const handleTouchStart = (e: TouchEvent) => {
            e.preventDefault();
            if (e.touches.length > 0) {
                touchXRef.current = getTouchX(e);
                isTouchingRef.current = true;
            }
        };

        const handleTouchMove = (e: TouchEvent) => {
            e.preventDefault();
            if (e.touches.length > 0) {
                touchXRef.current = getTouchX(e);
            }
        };

        const handleTouchEnd = (e: TouchEvent) => {
            e.preventDefault();
            touchXRef.current = null;
            isTouchingRef.current = false;
        };

        canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
        canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
        canvas.addEventListener('touchend', handleTouchEnd, { passive: false });
        canvas.addEventListener('touchcancel', handleTouchEnd, { passive: false });

        return () => {
            canvas.removeEventListener('touchstart', handleTouchStart);
            canvas.removeEventListener('touchmove', handleTouchMove);
            canvas.removeEventListener('touchend', handleTouchEnd);
            canvas.removeEventListener('touchcancel', handleTouchEnd);
        };
    }, [gameStarted]);

    return (
        <main className="w-screen h-auto min-h-screen relative bg-linear-to-b from-black to-[#1a1a1a] flex items-center justify-center font-sans text-white!">
            {/* Landing screen - fades to 10% opacity when game starts */}
            <div
                className={`flex flex-col items-center text-center gap-8 max-w-3xl p-8 transition-opacity duration-500 max-h-full ${gameStarted ? 'opacity-10 pointer-events-none' : 'opacity-100'
                    }`}
                style={{ zIndex: gameStarted ? 0 : 10 }}
            >
                {/* Villain icons row at top with floating animation */}

                < div className={`flex gap-6 mb-4 ${gameStarted ? 'opacity-0' : 'opacity-100'} transition-opacity`} >
                    {enemyIcons.map((icon, index) => (
                        <img
                            key={index}
                            src={icon}
                            alt=""
                            className="w-12 h-12 animate-bounce [animation-duration:2s]"
                            style={{ animationDelay: `${index * 0.2}s`, transform: 'translateY(-25%)' }}
                            aria-hidden="true"
                        />
                    ))}
                </div>



                {/* Large 404 image */}
                <img src={notFoundImage.src} alt="" className="w-full max-w-2xl h-auto my-8 max-h-[25vh]" aria-hidden="true" />
                <h1 className="sr-only">404</h1>

                {/* Main text with italics on "went wrong" */}
                <h2 className="text-2xl">
                    uh oh, something <span className="italic font-medium">went wrong.</span>
                </h2>

                {/* Subtitle */}
                <p className="text-base font-semibold text-white! m-0">Defeat the villains and restore peace.</p>

                {/* Buttons row */}
                <div className="flex gap-4 items-center justify-center flex-wrap">
                    <button className="py-3.5 px-8 text-base font-semibold rounded-full border-none bg-white! text-black! cursor-pointer relative transition-all hover:pr-12 group" onClick={startGame}>
                        Start Game
                        <ArrowRight className="absolute opacity-0 transition-all right-4 top-1/2 transform -translate-y-1/2 group-hover:opacity-100 group-hover:right-6" size={16} />
                    </button>
                    <a href="/" className="py-3.5 px-8 text-base font-semibold rounded-full border border-white! text-white! bg-transparent cursor-pointer relative transition-all hover:bg-white! hover:text-black! hover:pr-12 group">
                        Return to Home
                        <ArrowRight className="absolute opacity-0 transition-all right-4 top-1/2 transform -translate-y-1/2 group-hover:opacity-100 group-hover:right-6" size={16} />
                    </a>
                </div>

                {/* Sidekick logo at bottom center */}
                <div className="absolute bottom-8">
                    <img src={sidekickLogo.src} alt="Sidekick" />
                </div>

                {/* Instructions box in bottom-right with close button */}
                {showInstructions && (
                    <div className="fixed bottom-8 right-8 bg-white!/10 bg-opacity-50 px-10 py-8 rounded-lg text-sm backdrop-blur-sm" style={{ boxShadow: 'inset 1px 1px 1px -1px rgba(255, 255, 255, 0.5), inset -1px -1px 1px -1px rgba(255, 255, 255, 0.5)' }}>
                        <button
                            className="absolute top-2 right-2 text-gray-400 hover:text-white!"
                            aria-label="Close instructions"
                            onClick={() => setShowInstructions(false)}
                        >
                            <X size={16} />
                        </button>
                        <p className="md:block">Use arrow keys or touch & drag to move</p>
                        <p className="md:block">Press space or touch to shoot</p>
                    </div>
                )}
            </div>

            {/* Score and Level display */}
            {gameStarted && (
                <div className='flex gap-2 fixed top-2 right-2 lg:top-8 lg:right-8 z-50'>
                    <div className="bg-white!/10 bg-opacity-50 px-4 py-4 rounded-lg text-sm backdrop-blur-sm" style={{ boxShadow: 'inset 1px 1px 1px -1px rgba(255, 255, 255, 0.5), inset -1px -1px 1px -1px rgba(255, 255, 255, 0.5)' }}>

                        <p>Score: {score}</p>
                    </div>
                    <div className="bg-white!/10 bg-opacity-50 px-4 py-4 rounded-lg text-sm backdrop-blur-sm" style={{ boxShadow: 'inset 1px 1px 1px -1px rgba(255, 255, 255, 0.5), inset -1px -1px 1px -1px rgba(255, 255, 255, 0.5)' }}>
                        <p>Level: {level}</p>
                    </div>

                </div>
            )}
            {gameStarted && (
                <div className='flex gap-2 fixed top-2 left-2 lg:top-8 lg:left-8 z-50'>
                    <button className="w-full text-center text-sm cursor-pointer underline text-white!/50! hover:text-white!!" onClick={() => setGameStarted(false)}>Quit Game</button>
                </div>
            )}

            {/* Game canvas - full screen */}
            {
                gameStarted && (
                    <>


                        <div className="fixed w-screen h-screen inset-0 flex items-center justify-center" style={{
                            // zIndex: 5
                        }}>
                            <div style={{
                                position: 'relative',
                                maxWidth: '100%',
                                maxHeight: '100%',
                                aspectRatio: `${GAME_WIDTH} / ${GAME_HEIGHT}`,
                                border: '2px solid rgba(255, 255, 255, 0.3)',
                                borderRadius: '1rem',
                                overflow: 'hidden',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            }}>
                                <canvas
                                    ref={canvasRef}
                                    width={GAME_WIDTH}
                                    height={GAME_HEIGHT}
                                    style={{
                                        display: 'block',
                                        width: '100%',
                                        height: '100%',
                                        imageRendering: 'crisp-edges'
                                    }}
                                />

                                {/* Game over / Level complete overlay */}
                                {gameOver && (
                                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-4">
                                        {enemiesRef.current.filter((e) => e.alive).length === 0 ? (
                                            // Level complete
                                            <>
                                                <h2 className="text-4xl font-bold">
                                                    Level {level} Complete!
                                                </h2>
                                                <p className="text-xl">Score: {score}</p>

                                                <div className="flex gap-4">
                                                    <button
                                                        className="py-3.5 px-8 text-base font-semibold rounded-full border-none bg-white! text-black! cursor-pointer relative transition-all hover:pr-12 group"
                                                        onClick={startNextLevel}
                                                    >
                                                        Next Level
                                                        <ArrowRight className="absolute opacity-0 transition-all right-4 top-1/2 transform -translate-y-1/2 group-hover:opacity-100 group-hover:right-6" size={16} />
                                                    </button>
                                                    <button
                                                        className="py-3.5 px-8 text-base font-semibold rounded-full border border-white! text-white! bg-transparent cursor-pointer relative transition-all hover:bg-white! hover:text-black!"
                                                        onClick={startGame}
                                                    >
                                                        Restart Game
                                                        <ArrowRight className="absolute opacity-0 transition-all right-4 top-1/2 transform -translate-y-1/2 group-hover:opacity-100 group-hover:right-6" size={16} />
                                                    </button>
                                                </div>
                                            </>
                                        ) : !initialsSubmitted ? (
                                            // Game over - initials input
                                            <>
                                                <h2 className="text-4xl font-bold">Game Over</h2>
                                                <p className="text-xl">Final Score: {score}</p>

                                                <form onSubmit={handleInitialsSubmit} className="flex flex-col items-center gap-4 mt-4">
                                                    <div className="flex flex-col gap-2">
                                                        <label htmlFor="initials" className="text-sm font-semibold">Enter Your Initials:</label>
                                                        <input
                                                            id="initials"
                                                            type="text"
                                                            value={initials}
                                                            onChange={(e) => setInitials(e.target.value.toUpperCase().slice(0, 3))}
                                                            maxLength={3}
                                                            className="px-4 py-3 text-2xl text-center font-bold rounded-lg bg-white!/20 border-2 border-white!/50 text-white! focus:outline-none focus:border-white! tracking-widest"
                                                            placeholder="AAA"
                                                            autoFocus
                                                            autoComplete="off"
                                                        />
                                                    </div>
                                                    <div className="flex gap-4">
                                                        <button
                                                            type="submit"
                                                            disabled={initials.trim().length === 0}
                                                            className="py-3.5 px-8 text-base font-semibold rounded-full border-none bg-white! text-black! cursor-pointer relative transition-all hover:pr-12 group disabled:opacity-50 disabled:cursor-not-allowed"
                                                        >
                                                            Submit
                                                            <ArrowRight className="absolute opacity-0 transition-all right-4 top-1/2 transform -translate-y-1/2 group-hover:opacity-100 group-hover:right-6" size={16} />
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => setInitialsSubmitted(true)}
                                                            className="py-3.5 px-8 text-base font-semibold rounded-full border border-white! text-white! bg-transparent cursor-pointer relative transition-all hover:bg-white! hover:text-black!"
                                                        >
                                                            Skip
                                                        </button>
                                                    </div>
                                                </form>
                                            </>
                                        ) : (
                                            // Game over - after initials submitted
                                            <>
                                                <h2 className="text-4xl font-bold">Game Over</h2>
                                                <p className="text-xl">Final Score: {score}</p>
                                                {initials && <p className="text-lg">Player: {initials}</p>}

                                                <div className="flex gap-4">
                                                    <button
                                                        className="py-3.5 px-8 text-base font-semibold rounded-full border-none bg-white! text-black! cursor-pointer relative transition-all hover:pr-12 group"
                                                        onClick={startGame}
                                                    >
                                                        Play Again
                                                        <ArrowRight className="absolute opacity-0 transition-all right-4 top-1/2 transform -translate-y-1/2 group-hover:opacity-100 group-hover:right-6" size={16} />
                                                    </button>
                                                    <a
                                                        href="/app"
                                                        className="py-3.5 px-8 text-base font-semibold rounded-full border border-white! text-white! bg-transparent cursor-pointer relative transition-all hover:bg-white! hover:text-black! hover:pr-12 group"
                                                    >
                                                        Go Home
                                                        <ArrowRight className="absolute opacity-0 transition-all right-4 top-1/2 transform -translate-y-1/2 group-hover:opacity-100 group-hover:right-6" size={16} />
                                                    </a>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )
            }
        </main >
    );
}