import Header from "~/layouts/components/Header";

function HeadOnly({children}){
    return (
        <div>
            <Header />
            <div className="container">
                <div className="conntent">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default HeadOnly;