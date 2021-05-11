'use strict';

{
  const title = [
    '==============================',
    '現在持っているタスクの一覧',
    '=============================='
    ];

  const task = [
    {content: '机を片付ける', genre: '掃除'},
    {content: '牛乳を買う', genre: '買い物'},
    {content: '散歩する', genre: '運動'}
  ];

  function displayTasks() {
    title.forEach((titles) => {
      console.log(titles);
    });
  
    task.forEach((value, index) => {
      console.log(index + ' : ' + '[内容]' + task[index].content + '、' + '[ジャンル]' + task[index].genre);
    });
  }

  displayTasks();

  const newContent = prompt('タスクを入力してください');
  const newGenre = prompt('ジャンルを入力してください');

  task.push({
    content: newContent,
    genre: newGenre,
  });

  displayTasks();

  alert('新しいタスクを追加しました。');

  prompt('「確認,追加,削除,終了」のいずれかを入力してください');
}