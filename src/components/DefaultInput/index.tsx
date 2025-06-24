import styles from './styles.module.css'


type DefaultInputProps = {
    id: string; 
    labelText?:string;  //com ? informa que é opcional 
} & React.ComponentProps<'input'>  //faz uma intersection de tipos ,junta os meus tipos mais todos os tipos da tag input 


export function DefaultInput ({id,labelText, type, ...rest}:DefaultInputProps){// qualquer coisa que for passado alem , vai para o rest e é add como propriedade
    return (

    <>
    {labelText && <label htmlFor={id}> {labelText} </label>   }
   
    <input className={styles.input} id={id} type= {type} {...rest} />  


    </>



    )
}