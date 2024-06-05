import express from 'express'
import { handleHomePage,handleScheduler,handleRanking,handleTeams,handlePlayers,handleInformation} from '../controller/homeController'
const router = express.Router()

const handleTrash=(req,res)=>{
    res.send('Nhập sai link rồi bạn ơi :D ')
}
const initWebRoute = (app) => {
    router.get('/', handleHomePage),
    router.get('/scheduler',handleScheduler),
    router.get('/ranking',handleRanking),
    router.get('/teams',handleTeams),
    router.get('/players',handlePlayers),
    router.get('/ranking',handleRanking),
    router.get('/information',handleInformation)
    router.get('*',handleTrash)
    // router.get('/team', handleTeam)
    // router.post('/users/create-user',handleCreateUser)
    // // router.post('/delete-user/:id',handeDeleteUser)
    // // router.get('/update-user/:id',getUpdateUserPage=()=>{res.send('cac')})
    router.get('/ranking/:id', (req, res) => {
        const selectedSeason = req.params.season;
        // Thực hiện các xử lý cần thiết với giá trị đã chọn
        res.send(`Bạn đã chọn mùa giải: ${selectedSeason}`);
    });
    return app.use('/', router)
}

export default initWebRoute;