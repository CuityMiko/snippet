
/**
 * 在hash中添加标记字段, 再用无意义字段替换标记字段, 实现在浏览器中添加两个历史
 * 再监听hashchange事件, 用户点击浏览器返回按钮到达hash中包含标记字段时执行回调
 * @param targetHash {string} 添加到hash中, 当hashchange且hash中包含此字符串时执行callback
 * @param wrapperHash {string} 替换targetHash, 在history中添加一个历史, 确保点返回按钮就回到包含targetHash的状态
 * @param callback {function} hashchange且hash中包含targetHash时执行的方法
 **/
function hashWatcher(targetHash, wrapperHash, callback) {
    var originHash = (location.hash || '#').slice(1)

    var hash = originHash.replace(new RegExp(targetHash, 'g'), '')
    location.hash = hash + targetHash
    setTimeout(function () {
        location.hash = location.hash.replace(targetHash, wrapperHash)
        setTimeout(function () {
            window.addEventListener('hashchange', function (e) {
                var hash = location.hash || ''
                console.log(hash, hash.search(targetHash), callback)
                if (hash.search(targetHash) != -1 && typeof callback == 'function') {
                    callback()
                }
            }, false)
        }, 100)
    }, 100)
}

hashWatcher('__floor2__', '__floor2_wrapper__bak', function () {
    location.reload()
})
