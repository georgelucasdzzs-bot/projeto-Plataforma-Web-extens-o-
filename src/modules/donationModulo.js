let donation= []
export const donationStore = {
    initialize(initialDonation= []){
        donations=[ initialDonation]

    },
    get(){
        return[donations]
    }
}
