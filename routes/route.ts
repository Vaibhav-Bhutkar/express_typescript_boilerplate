import { Router } from "express";
import controller from '../controllers/controller';
import axios from 'axios';
const router = Router();
// ---- Simple route
router.get('/', controller.homePage);

//---- Different get route
router.get('/AboutUs', controller.aboutUs);
router.get('/Contact', controller.contactus);


//-----Same route with post method
router.post('/aboutus', controller.aboutUs);

//---------router all method special case
router.all('/test', function (req, res) {
    res.send("HTTP method doesn't have any effect on this route!");
});



/**
 * Get call to get all products
 */
router.post("/addproduct", async (req, res) => {
    try {
        const result = await axios.post('https://dummyjson.com/products/add', {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: 'ELEVATE 2023'
            })
        })

        if (result.data.id) {
            console.log("product added successfully ", result.data.id);

        }

    } catch (error) {
        console.log("Got exception", error)
    }
})


//-----Dyanamic route
router.get('/get/:ID', controller.getID);

module.exports = router;