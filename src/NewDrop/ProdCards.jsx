import './NewDrop.css'
import { NewDrops } from '../Const/const'
import newDrop1 from '../assets/NewDrops/Rectangle 5.png'
import { useNavigate } from 'react-router-dom'
function ProdCards() {
    const Navigate = useNavigate()
    return (
        <div className="NewDrops" id='NewArrived'>


            {
                NewDrops.slice(0, 4).map((prod, i) => {
                    return (<div className="prodCard" key={i}>
                        <div className={`badge ${prod.badge}`}>{prod.badge}</div>
                        <img src={prod.img[0]} alt="" onClick={() => {
                            Navigate('/productDetails', {
                                state: prod,

                            })
                            window.scrollTo(0, 0)
                        }} />
                        <p>{prod.name}</p>
                        <button onClick={() => {
                            Navigate('/productDetails', {
                                state: prod
                            })
                            window.scrollTo(0, 0);
                        }}>View Product - <span>{prod.price}</span></button>
                    </div>)

                })
            }

        </div>
    )
}

export default ProdCards