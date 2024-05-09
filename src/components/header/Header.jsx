import React from "react";
import HeaderStyles from "./Header.module.scss";
// react functional Componentleri her zaman sadece ve sadece 1 tane parametre alır başka parametre almaz oda bestpructis olarak props ile adlandırırız çoğunlukla
// bu props Componentin aldığı her şeyi alır Headera gönderdiğim her şey props objesi olarak tanımlanır "KEY" "VALUE" şeklinde deam ediyor


// propsun bir obje olduğunu bildiğim için içerisinde süslü açıp istediğimi alabilrim
const Header = ({categories,text}) => {
    console.log(text)
    console.log(categories)

    return (// return her zaman tek bir element kabul eder içerisine istediğini koyabilrisin örneğin div gibi
        <div className={HeaderStyles.header}>
            <h1 className={HeaderStyles.header}>{text}</h1> 
            <div>
                {
                    categories.map((item) =>(// burada 2. bir jsx alanı açtık dikkat edersen onun için button içine js kodu olan item süslü ile yine , Her child unic key isticektir bunuda buttonda vedik 
                        <button key={item}>{item}</button> // categories unic bir şey olduğu için ona da item verdim            
                     ) )
                }
            </div>
        </div>
    )
}

export default Header;



// const Header = (props) => {
//     console.log(props)
//     const {catagories, text } = props; // bu şekil de dışarı da alabiliriz  yada direk havardan da alabilriz
//     return (
//         <div>fasfds</div>
//     )
// }

// export default Header;