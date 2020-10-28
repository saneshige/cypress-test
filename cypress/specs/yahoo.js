import * as Const from '../constants/yahoo';

describe('【試験】yahooトップ画面', () => {
  before(() => {
    // 一度だけ実行するコード
    cy.visit('/');
  });

  beforeEach(() => {
    // 各テスト実行前に実行するコード
  });

  describe('基本要素の確認', () => {
    it('URLが正しいこと', () => {
      cy.url().should('eq', 'https://www.yahoo.co.jp/');
      cy.url().should('include', 'yahoo');
      cy.url().should('match', /.*yahoo.*/);
    });

    it('タイトルが正しいこと', () => {
      cy.title().should('eq', 'Yahoo! JAPAN');
      cy.title().should('include', 'Yahoo');
      cy.title().should('match', /.*Yahoo.*/);
    });
  });

  describe('テキストの一致確認', () => {
    it('完全一致していること', () => {
      cy.get(Const.項目.ヘッダー.ホームページに設定する).should(
        'text',
        'ホームページに設定する'
      );
    });

    it('部分一致していること', () => {
      cy.get(Const.項目.ヘッダー.ホームページに設定する).should(
        'contains.text',
        '設定'
      );
    });

    it('正規表現で一致していること', () => {
      cy.get(Const.項目.ヘッダー.ホームページに設定する)
        .invoke('text')
        .should('match', /.*設定.*/);
    });
  });

  describe('要素の属性', () => {
    it('表示されていること', () => {
      cy.get(Const.項目.ヘッダー.ホームページに設定する).should('be.visible');
    });

    it('表示されていないこと', () => {
      cy.get(Const.項目.ヘッダー.dummy).should('not.be.visible');
    });

    it('特定のclassがあること', () => {
      cy.get(Const.項目.ヘッダー.ホームページに設定する).should(
        'have.class',
        'fQMqQTGJTbIMxjQwZA2zk DB1xWkV-AiF3oBGL1BuYd'
      );
    });

    it('特定のclassがないこと', () => {
      cy.get(Const.項目.ヘッダー.ホームページに設定する).should(
        'not.have.class',
        'dummy'
      );
    });

    it('特定の属性があること', () => {
      cy.get(Const.項目.ヘッダー.ロゴ).should('have.attr', 'href');
    });

    it('特定の属性がないこと', () => {
      cy.get(Const.項目.ヘッダー.ロゴ).should('not.have.attr', 'id');
    });

    it('特定の属性値が正しいこと', () => {
      cy.get(Const.項目.ヘッダー.ロゴ).should(
        'have.attr',
        'href',
        'https://www.yahoo.co.jp'
      );
    });
  });

  describe('入力項目の確認', () => {
    before(() => {
      cy.visit('https://auctions.yahoo.co.jp/search/advanced?auccat=0');
    });

    it('値が一致していること', () => {
      cy.get(Const.項目.オークション.キーワード1).should('value', '');
    });

    it('活性化していること', () => {
      cy.get(Const.項目.オークション.キーワード1).should('not.be.disabled');
    });

    it('非活性化していること', (done) => {
      // cy.get(Const.項目.オークション.キーワード1).should('be.disabled');
      done();
    });

    it('チェックされていること', () => {
      cy.get(Const.項目.オークション.すべてチェック).should('be.checked');
    });

    it('チェックされていないこと', () => {
      cy.get(Const.項目.オークション.北海道チェック).should('not.be.checked');
    });

    it('フォーカスがあること', () => {
      cy.get(Const.項目.オークション.キーワード1).focus();
      cy.get(Const.項目.オークション.キーワード1).focused();
    });
  });

  describe('操作の確認', () => {
    it('クリック', (done) => {
      cy.get(Const.項目.オークション.コンピュータラジオ).click();
      done();
    });

    it('文字入力', (done) => {
      cy.get(Const.項目.オークション.キーワード1).type('サンプル');
      done();
    });

    it('文字入力', (done) => {
      cy.get(Const.項目.オークション.キーワード1).focus();
      done();
    });

    it('クリア', (done) => {
      cy.get(Const.項目.オークション.キーワード1).clear();
      done();
    });
  });
});
