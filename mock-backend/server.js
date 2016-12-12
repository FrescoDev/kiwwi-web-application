const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

var user = {
    userId: 1,
    profile: {
        firstName: 'John',
        lastName: 'Kiwwi',
        address: '21 Kiwwi Lane',
        dateOfBirth: '04/09/1989',
        email: 'john@email.com',
        telephone: '078178856999'
    },
    foodPreferences: {
        glutenFree: false,
        vegetarian: false,
        veganFree: false,
        pescatarian: false,
        dairyFree: false,
        wheatFree: false,
        eggFree: false
    },
    metrics: {
        weight: 3,
        bmi: 4,
        height: 2,
        metabolicRate: 1,
        fitnessLevel: 2
    },
    hasCompletedFirstConsultation: false,
    healthGoalId: 2,
    recommendedActivityGroupIds: [2],
    recommendedFoodGroupIds: [
        1, 4, 3
    ],
    lastUpdate: '12/12/2016'
};

var userDb = {
    1: user
};

app.get('/user/:id', function (req, res) {
    var id = req.params.id;

    if (userDb[id]) {
        setTimeout(function () {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(userDb[id]));
        }, 3000);
    } else {
        res
            .status(404)
            .send({error: 'Not found'});
    }
});

app.listen(7000);
console.log('Listening on http://localhost:7000');