var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if (!port) {
    console.log(' 需指定端口号! \n 如·：node server.js 8888')
    process.exit(1)
}

var server = http.createServer(function (request, response) {
    var parsedUrl = url.parse(request.url, true)
    var pathWithQuery = request.url
    var queryString = ''
    if (pathWithQuery.indexOf('?') >= 0) { queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
    var path = parsedUrl.pathname
    var query = parsedUrl.query
    var method = request.method

    /******** 核心 ************/

    console.log('接受到请求，路径（带查询参数）为：' + pathWithQuery)

    if (path === '/') {
        response.statusCode = 200 // 状态码
        response.setHeader('Content-Type', 'text/html;charset=utf-8')  //响应内容的类型/语法
        response.write(`This is a title`) //相应的返回内容
        response.end()  //表示响应可以发给用户了
    } else if (path === '/index.html') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/html; charset=utf-8')
        let string = fs.readFileSync('public/index.html').toString()
        const page1 = fs.readFileSync('db/page1.json').toString()
        const array = JSON.parse(page1)
        const result = array.map(item => `<li>${item.id}</li>`).join('')
        string = string.replace('{{page1}}', `<ul id='xxx'>${result}</ul>`)
        response.write(string)
        response.end()
    } else if (path === '/main.js') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/javaScript; charset=utf-8')
        response.write(fs.readFileSync('public/main.js'))
        response.end()
    } else if (path === '/style.css') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/css; charset=utf-8')
        response.write(fs.readFileSync('public/style.css'))
        response.end()
    } else if (path === '/2.js') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/javaScript; charset=utf-8')
        response.write(fs.readFileSync('public/2.js'))
        response.end()
    } else if (path === '/3.html') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/html; charset=utf-8')
        response.write(fs.readFileSync('public/3.html'))
        response.end()
    } else if (path === '/4.xml') {         //加载XML
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/xml; charset=utf-8')
        response.write(fs.readFileSync('public/4.xml'))
        response.end()
    } else if (path === '/5.json') {         //加载XML
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/json; charset=utf-8')
        response.write(fs.readFileSync('public/5.json'))
        response.end()
    } else if (path === '/page2') {         //加载XML
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/json; charset=utf-8')
        response.write(fs.readFileSync('db/page2.json'))
        response.end()
    } else if (path === '/page3') {         //加载XML
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/json; charset=utf-8')
        response.write(fs.readFileSync('db/page3.json'))
        response.end()
    }

    else {
        response.statusCode = 404
        response.setHeader('Content-Type', 'text/html; charset=utf-8')
        response.write(`你输入的路径不存在对应的内容，请确认路径输入。`)
        response.end()
    }

    /******** end ************/
})

server.listen(port)
console.log(' 监听 ' + port + ' 成功\n 可打开 http://localhost:' + port)