import {combineReducers} from 'redux'

const songReducers = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:32' },
        { title: 'All Star', duration: '3:11' },
        { title: 'I Want it That Way', duration: '3:43' },
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songReducers,
    selectedSong: selectedSongReducer
})