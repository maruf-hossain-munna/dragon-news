import localFont from "next/font/local";

const Old = localFont({
    src : [
        {
            path: "./old.ttf",
            weight: "500",
            style: "normal",
        },
        
    ], 
    variable : "--old",
});

export default Old;