import app from './app.js'
import { connectDB } from './db.js';

connectDB();
app.listen(3090);
console.log('Puerto Servidor', 3090);