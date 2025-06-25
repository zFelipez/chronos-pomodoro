import styles from './styles.module.css'


type DefaultButtonProps = {
    icon : React.ReactNode
    color?: 'green'  | 'red';
} & React.ComponentProps<'button'>  


export function DefaultButton ({ icon,color ='green' , ...props}:DefaultButtonProps){// qualquer coisa que for passado alem , vai para o rest e é add como propriedade
    return (

    <>
     
   
    <button className={`${styles.button} ${styles[color]}` } {...props} > {icon} </button> 


    </>



    )
}