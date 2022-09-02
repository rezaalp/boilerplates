import '../helpers/OwnMethod'
import { addText } from '../helpers/OwnMethod'


export const TestComponent = ()=>{
    let obj = {
        name: '',
        render : (test) => `Mr. ${test}`
    }
    let newObj = {
        name: 'reza'
    }
    return (
        <>
            <div>
            <div className='newDiv'>test</div>
            </div>
        </>
    )
}