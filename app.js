// const express=require("express")
// const path=require("path");
// const helmet=require("helmet");
// const hpp=require("hpp");
// const mongoSanitize=require("express-mongo-sanitize");
// const session=require("express-session");
// const boolParser=require("express-query-boolean");
// const {fileURLToPath}=require("url");
// const cors=require("cors");
// const app = express();
// app.use(cors());
// app.enable("trust proxy");
// app.use(helmet());
// app.use(boolParser());
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(mongoSanitize());
// app.use(hpp());
// app.use(
//   session({
//     secret: "keyboard cat",
//     resave: true,
//     rolling: true,
//     saveUninitialized: false,
//     cookie: { expires: 60 * 60 * 1000 },
//   })
// );

// module.export= app;