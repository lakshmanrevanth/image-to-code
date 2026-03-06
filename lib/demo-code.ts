export const DEMO_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern SaaS Landing Page</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: #e2e8f0;
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
            border-bottom: 1px solid rgba(148, 163, 184, 0.1);
        }

        .logo {
            font-size: 24px;
            font-weight: bold;
            background: linear-gradient(135deg, #3b82f6 0%, #a855f7 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        nav {
            display: flex;
            gap: 30px;
        }

        nav a {
            color: #cbd5e1;
            text-decoration: none;
            font-size: 14px;
            transition: color 0.3s;
        }

        nav a:hover {
            color: #60a5fa;
        }

        .hero {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
            padding: 100px 0;
        }

        .hero-content h1 {
            font-size: 48px;
            font-weight: 800;
            margin-bottom: 20px;
            line-height: 1.2;
        }

        .hero-content p {
            font-size: 18px;
            color: #94a3b8;
            margin-bottom: 30px;
        }

        .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
            color: white;
            padding: 14px 40px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: transform 0.3s, box-shadow 0.3s;
            border: none;
            cursor: pointer;
        }

        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
        }

        .hero-image {
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
            border-radius: 16px;
            padding: 60px;
            text-align: center;
            border: 1px solid rgba(148, 163, 184, 0.2);
        }

        .hero-image svg {
            width: 100%;
            height: auto;
        }

        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
            padding: 80px 0;
        }

        .feature-card {
            background: rgba(30, 41, 59, 0.8);
            border: 1px solid rgba(148, 163, 184, 0.1);
            border-radius: 12px;
            padding: 30px;
            transition: all 0.3s;
        }

        .feature-card:hover {
            background: rgba(30, 41, 59, 1);
            border-color: rgba(59, 130, 246, 0.5);
            transform: translateY(-5px);
        }

        .feature-icon {
            width: 48px;
            height: 48px;
            background: linear-gradient(135deg, #3b82f6 0%, #a855f7 100%);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            font-size: 24px;
        }

        .feature-card h3 {
            font-size: 18px;
            margin-bottom: 10px;
        }

        .feature-card p {
            color: #94a3b8;
            font-size: 14px;
        }

        @media (max-width: 768px) {
            .hero {
                grid-template-columns: 1fr;
                padding: 60px 0;
            }

            .hero-content h1 {
                font-size: 32px;
            }

            nav {
                gap: 15px;
            }

            .container {
                padding: 0 15px;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container" style="width: 100%; display: flex; justify-content: space-between; align-items: center;">
            <div class="logo">ImageToCode</div>
            <nav>
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    </header>

    <main>
        <section class="hero">
            <div class="hero-content">
                <h1>Transform Designs into Code</h1>
                <p>Upload your UI designs and let AI convert them into clean, production-ready HTML and CSS code instantly.</p>
                <button class="cta-button">Get Started Free</button>
            </div>
            <div class="hero-image">
                <div style="font-size: 80px; opacity: 0.5;">🎨</div>
            </div>
        </section>

        <section id="features" class="features">
            <div class="feature-card">
                <div class="feature-icon">⚡</div>
                <h3>Lightning Fast</h3>
                <p>Get your code in seconds with AI-powered analysis and generation.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">✨</div>
                <h3>Clean Code</h3>
                <p>Semantic HTML and well-structured CSS ready for production use.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🎯</div>
                <h3>Accurate</h3>
                <p>Advanced AI understands your design and recreates it precisely.</p>
            </div>
        </section>
    </main>
</body>
</html>`;
