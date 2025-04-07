import fs from 'fs/promises';
import path from 'path';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  if (process.env.ASTRO_SSR !== "true") {
    return new Response("API endpoints are only available in SSR mode", { status: 403 });
  }
  const { filename, content } = await request.json();
  const filePath = path.join(process.cwd(), "src/content/resources", filename);
  try {
    await fs.writeFile(filePath, content);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to create file" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
