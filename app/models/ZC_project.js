/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_project', {
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PlatID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProjectName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    TargetName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ShortDesc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    TimesRotation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    SellStock: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    TargetAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CurrentAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    BigPic: {
      type: DataTypes.STRING,
      allowNull: false
    },
    MiddlePic: {
      type: DataTypes.STRING,
      allowNull: false
    },
    SmallPic: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ViewCount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LastUpdateTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    TargetNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LowVote: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    State: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    OnlineState: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PlatProjectID: {
      type: DataTypes.STRING,
      allowNull: true
    },
    InvestmentType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ISReservation: {
      type: "BIT",
      allowNull: false
    },
    EndDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    StartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ISMovie: {
      type: "BIT",
      allowNull: false
    },
    MovieBody: {
      type: DataTypes.STRING,
      allowNull: true
    },
    MobilePic: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IsDel: {
      type: "BIT",
      allowNull: false
    },
    IsHide: {
      type: "BIT",
      allowNull: false
    },
    IsLadder: {
      type: "BIT",
      allowNull: false
    },
    HightVote: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    IsTransfer: {
      type: "BIT",
      allowNull: false
    },
    IsPledge: {
      type: "BIT",
      allowNull: false
    },
    IsBalance: {
      type: "BIT",
      allowNull: false
    },
    IsStand: {
      type: "BIT",
      allowNull: false
    },
    BalanceDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    StandType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IsLous: {
      type: "BIT",
      allowNull: false
    },
    StandRate: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    StandTerm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NewUserLimit: {
      type: "BIT",
      allowNull: false
    },
    FinishDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'ZC_project'
  });
};
