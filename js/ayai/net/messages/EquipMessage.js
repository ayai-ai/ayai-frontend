define("EquipMessage", function() {

    function EquipMessage(slot, equipmentType) {
        // constructor
        this.data = {
            type: "equip",
            slot: slot,
            equipmentType: equipmentType
        };
    };
    var p = EquipMessage.prototype;


   //  public properties 
   //  =================     
   
    p.data = null;


    //  public methods
    //  ==============


    //  private methods
    //  ===============


    return EquipMessage;
});
