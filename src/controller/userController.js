const router = require('express').Router();
module.exports = router;

const userService = require('../service/userService');

router.post('/getUserList', async (req, res, next) => {
    const result = await userService.getUserList();
    res.ResultVO(0, '成功', result);
});

router.post('/getUserInfo', async (req, res, next) => {
    const result = await userService.getUserInfo(req.body.userId);
    res.ResultVO(0, '成功', result);
});

router.post('/getGov', async (req, res, next) => {
    const result = await userService.getGov();
    res.ResultVO(0, '成功', result);
});

router.post('/getDoc', async (req, res, next) => {
    const result = await userService.getDoc();
    res.ResultVO(0, '成功', result);
});

router.post('/signIn', async (req, res, next) => {
    const result = await userService.signIn(req.body.userId, req.body.password);
    res.ResultVO(0, '成功', result);
});

router.post('/search', async (req, res, next) => {
    const result = await userService.search(req.body.keyWord);
    res.ResultVO(0, '成功', result);
});

router.post('/delete1', async (req, res, next) => {
    const result = await userService.delete1(req.body.content);
    res.ResultVO(0, '成功', result);
});

router.post('/delete2', async (req, res, next) => {
    const result = await userService.delete2(req.body.content);
    res.ResultVO(0, '成功', result);
});
