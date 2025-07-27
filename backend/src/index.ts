import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import mondayRoutes from "./routes/monday.routes";

// ✅ Carregar .env da raiz do backend
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/monday", mondayRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
