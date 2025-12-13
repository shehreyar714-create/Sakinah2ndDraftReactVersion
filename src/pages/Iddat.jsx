import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import "../css/Iddat.css"

function Iddat() {

    return(
        <>
            <Navbar />
            <h1>Iddat Period Calculator</h1> 
            <div className="dropdown">
                <label for="iddat-type"> Select type of Iddat: </label>
                <select name="iddat" id="iddat-type">
                        <option value="divorce">Divorce</option>
                        <option value="death">Death of Husband</option>
                </select>        

            </div>
            <Footer />
        </>
    )
}

export default Iddat;