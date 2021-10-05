// Тесты для модуля dynamic_array

import {PlayList} from './PlayList.js';


const NAME_PLAY_LIST = "TEST";

const TEST_APPEND_LEFT = [
    {data: [], item: 5, expected: [5]},
    {data: [0], item: 3, expected: [3, 0]},
    {data: [1, 2, 3], item: 5, expected: [5, 1, 2, 3]},
    {data: [-1, 2, 0], item: 0, expected: [0, -1, 2, 0]},
    {data: [0, 0, 0, 0], item: 0, expected: [0, 0, 0, 0, 0]},
    {data: [7, 8, 9], item: 5, expected: [5, 7, 8, 9]},
];

const TEST_APPEND_RIGHT = [
    {data: [], item: 5, expected: [5]},
    {data: [0], item: 3, expected: [0, 3]},
    {data: [1, 2, 3], item: 5, expected: [1, 2, 3, 5]},
    {data: [-1, 2, 0], item: 0, expected: [-1, 2, 0, 0]},
    {data: [0, 0, 0, 0], item: 0, expected: [0, 0, 0, 0, 0]},
    {data: [7, 8, 9], item: 5, expected: [7, 8, 9, 5]},
];

const TEST_APPEND = [
    {data: [], item: 5, expected: [5]},
    {data: [0], item: 3, expected: [0, 3]},
    {data: [1, 2, 3], item: 5, expected: [1, 2, 3, 5]},
    {data: [-1, 2, 0], item: 0, expected: [-1, 2, 0, 0]},
    {data: [0, 0, 0, 0], item: 0, expected: [0, 0, 0, 0, 0]},
    {data: [7, 8, 9], item: 5, expected: [7, 8, 9, 5]},
];

const TEST_REMOVE = [
    {data: [5], item: 5, expected: []},
    {data: [0, 7], item: 0, expected: [7]},
    {data: [1, 2, 3], item: 2, expected: [1, 3]},
    {data: [-1, 2, 0], item: -1, expected: [2, 0]},
    {data: [0, 0, 0, 0], item: 0, expected: [0, 0, 0]},
    {data: [2, 5], item: 5, expected: [2]},
];

const TEST_REMOVE_VALUE_ERROR = [
    {data: [], item: 5},
    {data: [7], item: 0},
    {data: [1, 3], item: 2},
    {data: [2, 0], item: -1},
];

const TEST_INSERT = [
    {data: [1], previous: 1, item: 3, expected: [1, 3]},
    {data: [2, 5], previous: 2, item: 3, expected: [2, 3, 5]},
    {data: [4, 4], previous: 4, item: 3, expected: [4, 3, 4]},
    {data: [4, 4, 1], previous: 1, item: 3, expected: [4, 4, 1, 3]},
    {data: [4, 4, 1], previous: 4, item: 3, expected: [4, 3, 4, 1]},
];

const TEST_LAST = [
    {data: [], expected: null},
    {data: [5], expected: 5},
    {data: [0, 7], expected: 7},
    {data: [1, 2, 3], expected: 3},
    {data: [-1, 2, 0], expected: 0},
    {data: [0, 0, 0, 0], expected: 0},
    {data: [2, 5], expected: 5},
];

const TEST_LEN = [
    {data: [], expected: 0},
    {data: [1.0], expected: 1},
    {data: [1, 1], expected: 2},
    {data: [1, 2], expected: 2},
    {data: [1, 9999, 3, 4, 1], expected: 5}
];

const TEST_GETITEM = [
    {data: [2, 3, 4]},
    {data: [5, 1, -1]},
];

const TEST_REVERSED = [
    {data: [], expected: []},
    {data: [1], expected: [1]},
    {data: [2, 2, 2], expected: [2, 2, 2]},
    {data: [2, 5], expected: [5, 2]},
    {data: [0, 6, 6, 9], expected: [9, 6, 6, 0]},
    {data: [0, 0, 0, 1], expected: [1, 0, 0, 0]},
];

const TEST_PLAY_ALL = [
    {data: [1, 2, 3, 4], item: 1, expected: [1, 2, 3, 4]},
    {data: [1, 2, 5, 4], item: 5, expected: [5, 4, 1, 2]},
    {data: [1, 0, 0, 4], item: 0, expected: [0, 0, 4, 1]},
];

const TEST_DRAG = [
    {data: [1, 6], item: 6, expected: [6, 1]},
    {data: [1, 6], item: 1, expected: [6, 1]},
    {data: [4, 4, 1], item: 1, expected: [4, 1, 4]},
    {data: [1, 2, 3, 4], item: 3, expected: [1, 3, 2, 4]},
];

const TEST_DROP = [
    {data: [1, 6], item: 6, expected: [6, 1]},
    {data: [1, 6], item: 1, expected: [6, 1]},
    {data: [4, 4, 1], item: 1, expected: [1, 4, 4]},
    {data: [1, 2, 3, 4], item: 2, expected: [1, 3, 2, 4]},
];

const TEST_CONTAINS = [
    {data: [1, 6], item: 1, expected: true},
    {data: [1, 6], item: 5, expected: false},
    {data: [4, 4, 1], item: 1, expected: true},
    {data: [1, 2, 3, 4], item: 0, expected: false},
];


describe('Тест-кейс модуля PlayList', () => {
    it('Тест метода append_left', () => {
        TEST_APPEND_LEFT.forEach((test_data) => {
            let test_play_list = new PlayList(NAME_PLAY_LIST, test_data.data);
            test_play_list.append_left(test_data.item);
            expect(test_play_list.toArray()).toEqual(test_data.expected);
        });
    });

    it('Тест метода append_right', () => {
        TEST_APPEND_RIGHT.forEach((test_data) => {
            let test_play_list = new PlayList(NAME_PLAY_LIST, test_data.data);
            test_play_list.append_right(test_data.item);
            expect(test_play_list.toArray()).toEqual(test_data.expected);
        });
    });

    it('Тест метода append', () => {
        TEST_APPEND.forEach((test_data) => {
            let test_play_list = new PlayList(NAME_PLAY_LIST, test_data.data);
            test_play_list.append_right(test_data.item);
            expect(test_play_list.toArray()).toEqual(test_data.expected);
        });
    });

    it('Тест метода remove', () => {
        TEST_REMOVE.forEach((test_data) => {
            let test_play_list = new PlayList(NAME_PLAY_LIST, test_data.data);
            test_play_list.remove(test_data.item);
            expect(test_play_list.toArray()).toEqual(test_data.expected);
        });
    });

    it('Тест метода remove с вызовом исключения ValueError', () => {
        TEST_REMOVE_VALUE_ERROR.forEach((test_data) => {
            let test_play_list = new PlayList(NAME_PLAY_LIST, test_data.data);
            const t = () => {
                test_play_list.remove(test_data.item);
            };
            expect(t).toThrow('Value Error');
        });
    });

    it('Тест метода insert', () => {
        TEST_INSERT.forEach((test_data) => {
            let test_play_list = new PlayList(NAME_PLAY_LIST, test_data.data);
            test_play_list.insert(test_data.previous, test_data.item);
            expect(test_play_list.toArray()).toEqual(test_data.expected);
        });
    });

    it('Тест метода last', () => {
        TEST_LAST.forEach((test_data) => {
            let test_play_list = new PlayList(NAME_PLAY_LIST, test_data.data);
            expect(test_play_list.last()).toEqual(test_data.expected);
        });
    });

    it('Тест метода len', () => {
        TEST_LEN.forEach((test_data) => {
            let test_play_list = new PlayList(NAME_PLAY_LIST, test_data.data);
            expect(test_play_list.__len__()).toEqual(test_data.expected);
        });
    });

    it('Тест метода getitem', () => {
        TEST_GETITEM.forEach((test_data) => {
            let test_play_list = new PlayList(NAME_PLAY_LIST, test_data.data);
            test_data.data.forEach((item, index) => {
                expect(test_play_list.__getitem__(index)).toEqual(item);
            });
        });
    });

    it('Тест метода reversed', () => {
        TEST_REVERSED.forEach((test_data) => {
            let test_play_list = new PlayList(NAME_PLAY_LIST, test_data.data);
            test_play_list.reversed();
            expect(test_play_list.toArray()).toEqual(test_data.expected);
        });
    });

    it('Тест метода play_all', () => {
        TEST_PLAY_ALL.forEach((test_data) => {
            let test_play_list = new PlayList(NAME_PLAY_LIST, test_data.data);
            test_play_list.play_all(test_data.item);
            test_data.expected.forEach((item) => {
                expect(test_play_list.next_track()).toEqual(item);
            });
        });
    });

    it('Тест метода drag', () => {
        TEST_DRAG.forEach((test_data) => {
            let test_play_list = new PlayList(NAME_PLAY_LIST, test_data.data);
            test_play_list.drag(test_data.item);
            expect(test_play_list.toArray()).toEqual(test_data.expected);
        });
    });

    it('Тест метода drop', () => {
        TEST_DROP.forEach((test_data) => {
            let test_play_list = new PlayList(NAME_PLAY_LIST, test_data.data);
            test_play_list.drop(test_data.item);
            expect(test_play_list.toArray()).toEqual(test_data.expected);
        });
    });

    it('Тест метода contains', () => {
        TEST_CONTAINS.forEach((test_data) => {
            let test_play_list = new PlayList(NAME_PLAY_LIST, test_data.data);
            expect(test_play_list.__contains__(test_data.item)).toEqual(test_data.expected);
        });
    });
});
