var pokeRecord = require('../models/poke-model');

module.exports = {
    formatResults : function (results){
        res = [];
        results.forEach(function (record){
            var abilites = record.abilities;
            abilites = abilites.substring(1,abilites.length-1);
            abilites = abilites.split(", ");
            
            for(let i=0;i<abilites.length;i++){
                
                abilites[i] = abilites[i].substring(1,abilites[i].length-1);
                
            }
            
            var classfication = record.classfication;
            var name = record.name;
            var id = record.pokedex_number;
            
            var types = [];
            types.push(record.type1);
            if(record.type2!=''){
                types.push(record.type2);
            }
            
            var generation = record.generation;
            var is_legendary = record.is_legendary;
            res.push(new pokeRecord(name,abilites,classfication,id,types,generation,is_legendary));
        })

        return res;
    }
}