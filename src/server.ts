import {LoremIpsum} from "./sample";
import express, {Application} from "express";
import cors, {CorsOptions} from "cors";

export default class Server {
    private app: express.Application = null
    private port = 8080;

    constructor(app: Application) {
        this.config(app);
    }

    private config(app: Application): void {
        console.log(LoremIpsum())
        const corsOptions: CorsOptions = {
            origin: "http://localhost:8081"
        };

        app.use(cors(corsOptions));
        app.use(express.json());
        app.use(express.urlencoded({extended: true}));

        this.app = app
    }

    public Run() {
        this.app.listen(this.port, () => {
            console.log(`Server running at http://localhost:${this.port}`);
        });
    }
}


(new Server(express())).Run()