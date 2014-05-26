var SimpleModal = function()
{
    var self = this;

    self.modalId = 'confirm';
    self.overlayId = 'confirm-overlay';
    self.dialogWrapperId = 'confirm-container';
    self.modalButtonId = 'modal-id';
    self.submitButtonId = 'submit-button';
    self.cancelButtonId = 'cancel-button';
    self.upperButtonId = 'upper-close';

    self.init = function()
    {
        self.addEvents();
        self.modalEvents();
    };

    self.addEvents = function()
    {
        $(self.modalButtonId).removeEvents();
        $(self.modalButtonId).addEvent('click', function(e){
            e.preventDefault();
            self.startModal();
        });
    };

    self.startModal = function()
    {
        $(self.modalId).setStyle('display', 'block');
        $(self.overlayId).setStyle('display', 'block');
        $(self.dialogWrapperId).setStyle('display', 'block');

        SimpleModalHandler.resizer();
    };

    self.modalEvents = function()
    {
        $(self.upperButtonId).removeEvents();
        $(self.upperButtonId).addEvent('click', function(e)
        {
            e.preventDefault();
            $(self.cancelButtonId).fireEvent('click', {'preventDefault' : function(){}});

        }); 
         
        $(self.submitButtonId).removeEvents();
        $(self.submitButtonId).addEvent('click', function(e)
        {
            e.preventDefault();
            $(self.cancelButtonId).fireEvent('click', {'preventDefault' : function(){}});

        }); 

        $(self.cancelButtonId).removeEvents();
        $(self.cancelButtonId).addEvent('click', function(e)
        {
            e.preventDefault();
            self.closeModal();
        }); 

        window.removeEvents();
        window.addEvent('keyup', function(e) {
            window.removeEvents('keyup', Modal.escapeKeyFunction);
            Modal.escapeKeyFunction(e, 'update');
        });
    };

    self.closeModal = function()
    {
        $(self.modalId).setStyle('display', 'none');
        $(self.overlayId).setStyle('display', 'none');
        $(self.dialogWrapperId).setStyle('display', 'none');
    };

};

var SimpleModalHandler = 
{
    resizer : function()
    {
        var self = Modal;
        
        var theBox = $(Modal.modalObj.dialogWrapperId),
            winSize = window.getSize(),
            boxSize = theBox.getSize();
            
        theBox.setPosition({
            'x'  : ( ( winSize.x / 2 ) - ( boxSize.x / 2 ) ),
            'y' : ( ( winSize.y / 2 ) - ( boxSize.y / 2 ) )
        });
        
        window.removeEvent('resize', self.resizer);
        window.removeEvent('scroll', self.resizer);
        window.addEvent('resize', self.resizer);
        window.addEvent('scroll', self.resizer);
    }
};

var Modal = {

    modalObj : null,

    init : function()
    {
        var self = this;
        self.initSimpleModal();
    },

    initSimpleModal : function() {
        var self = this;
        self.modalObj = new SimpleModal();
        self.modalObj.init();
    },

    escapeKeyFunction : function(e, module)
    {
        if (e.key == 'esc' && module == 'new')
        {
            Modal.modalObj.closeModal();
        }
        else if (e.key == 'esc' && module == 'update')
        {
            Modal.modalObj.closeModal();
        }
    }
};

window.addEvent('domready', function() {
        Modal.init();
});