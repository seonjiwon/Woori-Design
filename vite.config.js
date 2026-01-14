import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, "..");

export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
    },
    build: {
        lib: {
            // 1. 라이브러리의 진입점 설정 (보통 src/index.js 또는 src/components/index.js)
            entry: resolve(__dirname, "src/index.js"),
            name: "WooriComponent",
            // 빌드 시 파일명 형식 (index.js, index.umd.cjs 등)
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            // 2. 라이브러리에 포함하지 않을 의존성 (사용자 프로젝트의 것을 사용)
            external: ["react", "react-dom", "react/jsx-runtime"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
    },
});
