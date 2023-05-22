window.onload = function () {
    daynightMode()
    switchMenu()
}

// ajax 載入連結內容
// loadContent = function (content) {
//     let element = document.querySelector(`main`);
//     element.setAttribute('class', `${content}`)
//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function () {
//         document.querySelector(".container").innerHTML = this.responseText;
//     }
//     xhttp.open("GET", ` ${content}.html`, true);
//     xhttp.send()
// }


// 白天與黑夜模式
// if (hours < 9 ) {
function daynightMode() {
    const hours = new Date().getHours()
        if (hours >= 5 && hours <=18) {
        const allElements = document.querySelectorAll('*');
        const navButton = document.querySelector('.nav-button>a')
        const footerButton = document.querySelector('.footer-button>a')
        const cardDiv = document.querySelectorAll('.card-body>div');
        const cardSpan = document.querySelectorAll('.card-body>span');
        const hamburgerItem = document.querySelectorAll('.hamburger-item')
        const closeItem = document.querySelectorAll('.close-item')
        
        // *的設定
        for (n = 0; n < allElements.length; n++) {
            allElements[n].style.color = 'rgb(107,74,74)'
            allElements[n].style.backgroundColor = 'rgb(218, 186, 149)'
        }
        // nav-button 與 footer-button 的設定
        navButton.style.backgroundColor = 'rgba(0,0,0,0.8)'
        navButton.style.color = 'rgb(219, 200, 182)'
        footerButton.style.backgroundColor = 'rgba(0,0,0,0.8)'
        footerButton.style.color = 'rgb(219, 200, 182)'
        // hamburger-item 的設定
        for (n = 0; n < hamburgerItem.length; n++) {
            hamburgerItem[n].style.backgroundColor = 'rgb(107, 74, 74)'
        }
        // close-item 的設定
        for (n = 0; n < closeItem.length; n++) {
            closeItem[n].style.backgroundColor = 'rgb(107, 74, 74)'
        }
        // card-body>div 的設定
        for (n = 0; n < cardDiv.length; n++) {
            cardDiv[n].style.color = 'rgb(107,74,74)'
        }
        // card-body>span 的設定
        for (n = 0; n < cardSpan.length; n++) {
            cardSpan[n].style.color = 'rgb(174, 100, 102)'
        }
    }
}

// 取得表單內容
function getForm() {
    const form = document.querySelector('form');
    const getTopic = form.elements.topic.value;
    const getPlace = form.elements.place.value;
    const getName = form.elements.name.value;
    const getTel = form.elements.tel.value;
    const getMail = form.elements.email.value;
    const getAddress = form.elements.address.value;
    const getMessage = form.elements.message.value;
    const customerMessage = [];
    customerMessage.push(
        `
        {
            "message" : 
            {
                "topic":${getTopic}
                "restaurant":${getPlace}
                "name":${getName}
                "tel":${getTel}
                "email":${getMail}
                "address":${getAddress}
                "message":${getMessage}
            }
        }
        `
    )
    console.log(JSON.stringify(customerMessage))
}

function switchMenu() {
    const hamburgerMenu = document.getElementById("hamburger-menu")
    const closeMenu = document.getElementById('close-menu')
    const navMenu = document.getElementById('nav-menu')
    const navItem = document.querySelectorAll('.nav-item')

    hamburgerMenu.addEventListener('click', function () {
        hamburgerMenu.style.display = 'none'
        if (hamburgerMenu.style.display === 'none') {
            closeMenu.style.display = 'block'
            navMenu.style.display = 'block'
            navMenu.style.position = 'absolute'
            navMenu.style.top = '100px'
            navMenu.style.left = '115px'
            navMenu.style.textAlign = 'center'
            navMenu.style.backgroundColor = 'rgba(218, 186, 149,0.8)'

            for (n = 0; n < navItem.length; n++) {
                navItem[n].style.width = '200px'
                navItem[n].style.margin = '0'
                navItem[n].style.opacity = '0.8'
            }
            if (closeMenu.style.display === 'block') {
                closeMenu.addEventListener('click', function () {
                    closeMenu.style.display = 'none'
                    hamburgerMenu.style.display = 'block'
                    navMenu.style.display = 'none'
                })
            }
        }
        window.addEventListener('resize',function() {
            
            if(window.innerWidth > 992) {
                hamburgerMenu.style.display = 'none';
                closeMenu.style.display = 'none';
            }else {
                navMenu.style.display = 'flex'
                navMenu.style.position = 'initial'
                navMenu.style.width = '250px'
            }
        })
    })
}