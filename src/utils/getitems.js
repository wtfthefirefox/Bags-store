import * as actionList from '../redux/actionCreators';
import store from '../redux/store';

const getItems = async () => {

    store.dispatch(actionList.turnLoad());
    const _apiBase = 'http://192.168.1.55:3000';
    const request = await fetch(`${_apiBase}/items`);

    if (!request.ok) {
        store.dispatch(actionList.onError());
        return;
    }

    const data = await request.json();
    const res = data.map(item => {
        return {
            ...item,
            count: 1,
            total: item.isSale ? Math.floor(item.price * 0.85) : item.price,
            activeImgId: 0,
            activeSizeId: 0
        }
    });

    store.dispatch(actionList.onLoadItems(res));
}

export default getItems;