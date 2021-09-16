//const { getMaxListeners } = require("process");

console.log('Succeed in js.');

getCSS.onclick = () => {
    const request = new XMLHttpRequest(); //创建HttpRequest对象
    request.open('GET', '/style.css'); // 调用打开文档
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log('下载完成。')
            if (request.status >= 200 && request.status < 300) {  //http状态码以2开头代表着成功
                const style = document.createElement('style') // 创建相应标签
                style.innerHTML = request.response  // 填写标签内容
                document.head.appendChild(style)  // 把标签插入文档
            } else {
                alert('加载CSS失败')
            }
        }
    }
    request.send();  // readyState = 2
}

getJS.onclick = () => {
    const request = new XMLHttpRequest(); //创建HttpRequest对象
    request.open('GET', '/2.js'); // 调用打开文档
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log('下载完成。')
            if (request.status >= 200 && request.status < 300) {  //http状态码以2开头代表着成功
                const script = document.createElement('script') // 创建相应标签
                script.innerHTML = request.response  // 填写标签内容
                document.body.appendChild(script)  // 把标签插入文档
            } else {
                alert('加载JS失败')
            }
        }
    }
    request.send();  // readyState = 2
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '3.html'); // readyState = 1
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log('下载完成。')
            if (request.status >= 200 && request.status < 300) {  //http状态码以2开头代表着成功
                const div = document.createElement('div') // 创建相应标签
                div.innerHTML = request.response  // 填写标签内容
                document.body.appendChild(div)  // 把标签插入文档
            } else {
                alert('加载HTML失败')
            }
        }
    }
    request.send();  // readyState = 2
}
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '4.xml');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log('下载完成。')
            if (request.status >= 200 && request.status < 300) {
                const dom = request.responseXML;
                const text = dom.getElementsByTagName('warning')[0].textContent; // XML是一个dom对象
                console.log(text.trim())
            } else {
                alert('加载XML失败')
            }
        }
    }
    request.send();  // readyState = 2
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log('下载完成。')
            if (request.status >= 200 && request.status < 300) {
                const object = JSON.parse(request.response); // .perse把符合JSON语法的字符串变成对应的对象或者其他
                JSON.textContent = object.result
            } else {
                alert('加载JSON失败')
            }
        }
    }
    request.send();

}
let n = 1;
getNEXT.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', `/page${n + 1}`);
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log('下载完成。')
            if (request.status >= 200 && request.status < 300) {
                const array = JSON.parse(request.response); // .perse把符合JSON语法的字符串变成对应的对象或者其他
                array.forEach(item => {
                    const li = document.createElement('li')
                    li.textContent = item.id
                    xxx.appendChild(li);
                });
            } else {
                alert('加载下一页失败')
            };
            n += 1
        }
    };
    request.send();

}