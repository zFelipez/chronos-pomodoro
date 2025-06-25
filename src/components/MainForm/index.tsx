import { PlayCircleIcon } from 'lucide-react';
import { DefaultButton } from '../DefaultButton';
import styles  from './styles.module.css';
import { Cycles } from '../Cycles';
import { DefaultInput } from '../DefaultInput';




export function MainForm(){

   return(



 <form action="" className='form'>

            <div className="formRow">
                   
                   <DefaultInput id= 'meuInput' type='text'
                    labelText= 'task' placeholder = 'Digite Algo'
                     
                 
                    /> 
                
            </div>

             <div className="formRow">

                 <p> Lorem ipsum dolor sit amet.</p>
            </div>


            <div className="formRow">

                  <Cycles/>
            </div>

            <div className="formRow">

                 <DefaultButton icon ={<PlayCircleIcon/>}/>
                  
            </div>


          </form>

   )

}