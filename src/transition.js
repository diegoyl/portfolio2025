import {motion} from "framer-motion";


const transition = (OgComponent) =>{


    return () => (
        <>
            <OgComponent />
                {/* <motion.div
                    className="erase-transition"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: .2}}
                    exit={{ opacity: 1 }}
                    transition={{ duration: 1, ease: [0.42, 0, 1, 1] }}
                /> */}
                <motion.div
                    className="reveal-transition"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .18, ease: [0.42, 0, 1, 1], delay: .8 }}
                />
        </>
        
    )
}
export default transition