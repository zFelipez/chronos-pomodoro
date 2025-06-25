import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon, TimerIcon } from 'lucide-react'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'

 

export function Menu ( ){
  
   
   
   type AvailableThemes = 'dark' | 'light';



    const  [theme, setTheme] = useState< AvailableThemes>(()=>{ // se for somente : '< dark | light >'tambem diz qual os tipos que podem ser colocados

      const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark'; 
      
      return storageTheme;
    }); 

    
    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
      event.preventDefault()// nao segue o link
       setTheme(prevTheme => {
        const nextTheme = prevTheme === 'dark'? 'light' : 'dark'; 
        return nextTheme
       })


    }

   const nextThemeIcon = {
    dark: <SunIcon/>,
    light: <MoonIcon/>
   }


    //useEffect:usado par  tambem tratar efeitos colaterais: 

   // sem array , é exec toda vez que o componente é renderizado, atualizado
   // com array de deps vazio, é exec somente quando o componente é montado , geralmente só uma vez , quando recarrega a pagina 
   // com array de deps preecnhido , é exec quando aquela dependendencia(ou estado) especificos  forem atualizados.

   


    useEffect(()=>{
        document.documentElement.setAttribute('data-theme',theme);
        localStorage.setItem('theme', theme); 

        return ()=>{

          console.log('Função de Clean-up, que limpa alguma sujeira da pagina');
        }
    },[theme])

     return(

      <nav className={styles.menu}>

       
      
      <a href="# " className={styles.menuLink} aria-label= 'Home' title='home'>

        <HouseIcon  />
   
      </a>
      <a href="# " className={styles.menuLink} aria-label= 'Historico' title='Historico'>

        <HistoryIcon />
   
      </a>

      <a href="# " className={styles.menuLink} aria-label= 'Configurações ' title='Configurações'>

        < SettingsIcon />
   
      </a>

      <a href="# " className={styles.menuLink} aria-label= 'Tema' title='Tema'
      onClick={handleThemeChange }>

        {nextThemeIcon[theme]}
      </a>
          
    </nav>

     )

}