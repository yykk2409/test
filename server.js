const express = require('express');
const app = express();
const path = require('path');

// 静的ファイルの提供
app.use(express.static(path.join(__dirname, 'public')));

// ルートエンドポイントにGETリクエストを処理
app.get('/test1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'imagetimer.html'));
});
app.get('/test2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'imagetimer2.html'));
});
app.get('/test3', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'imagetimer3.html'));
});
// サーバーを指定のポートで起動
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
