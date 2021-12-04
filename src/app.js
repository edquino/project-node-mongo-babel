import  express, { urlencoded } from "express";
import indexRoutes from "./routes/index.routes";
import { create } from "express-handlebars";
import path from "path";
import morgan from "morgan";

//Initialization
const app = express();

//template engine
app.set('views', path.join(__dirname, 'views'));
const exphbs = create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main",
    extname: ".hbs"
});

app.engine('hbs', exphbs.engine);
app.set('view engine', '.hbs');

//Middlewars
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//routes
app.use(indexRoutes);

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;