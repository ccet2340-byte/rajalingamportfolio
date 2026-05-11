export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="An error occurred while loading this page" />
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { 
        font: 15px/1.5 -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
        background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
        color: #f1f5f9;
        display: grid;
        place-items: center;
        min-height: 100vh;
        padding: 1.5rem;
      }
      .card {
        max-width: 28rem;
        width: 100%;
        text-align: center;
        padding: 3rem 2rem;
        background: rgba(30, 41, 59, 0.8);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(148, 163, 184, 0.2);
        border-radius: 0.75rem;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
      }
      .icon {
        font-size: 3rem;
        margin-bottom: 1rem;
        opacity: 0.7;
      }
      h1 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        font-weight: 600;
      }
      p {
        color: #cbd5e1;
        margin-bottom: 2rem;
        line-height: 1.6;
      }
      .actions {
        display: flex;
        gap: 0.75rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      button, a {
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font: inherit;
        cursor: pointer;
        text-decoration: none;
        border: none;
        font-weight: 500;
        transition: all 0.3s ease;
        display: inline-block;
      }
      .primary {
        background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
        color: white;
      }
      .primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 16px rgba(59, 130, 246, 0.4);
      }
      .secondary {
        background: rgba(148, 163, 184, 0.2);
        color: #e2e8f0;
        border: 1px solid rgba(148, 163, 184, 0.3);
      }
      .secondary:hover {
        background: rgba(148, 163, 184, 0.3);
      }
      @media (max-width: 640px) {
        .card {
          padding: 2rem 1.5rem;
        }
        h1 {
          font-size: 1.25rem;
        }
        .actions {
          flex-direction: column;
        }
        button, a {
          width: 100%;
        }
      }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="icon">⚠️</div>
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
`;
