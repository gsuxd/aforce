/// <reference types="vite/client" />
declare global {
    declare module "*.png" {
        const value: any;
        export = value;
     }
}