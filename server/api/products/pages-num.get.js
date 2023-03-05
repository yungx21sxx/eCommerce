import getAllProducts from "~/server/db/getAllProducts";

export default defineEventHandler(() => Math.ceil(getAllProducts().length / 12))