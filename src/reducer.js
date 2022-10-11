export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item:null,
    //remove after developing.............
    //token:'BQCEfEUJHpcjqznqq3V059Oqmr_WE1VTzgJK05aaRqX6zQlqZHG3NbW2jpVP7OIvPDyNMEgjPI_GhRfQx5I1rWjIa6ABVeaXggKBFmsN27ff-wQgtHAwp9knauWWIn177C-wM6ZoFKTHHjnY90WBEZqgDcrZhLsbwqFgLb4pzHq-N-lRqg28CG2gnc_FBL9ecAZeSmf37xfFTLjI',
};
//to update the user states
//Action -> type, [payload]
const reducer = (state, action) => {
console.log(action);
switch(action.type){
    case 'SET_USER':
        return{
            ...state,
            user:action.user
        };

        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token,
            }
        
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists,
            }
        default:
            return state;

        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly:action.discover_weekly,
            }
}
};
export default reducer;