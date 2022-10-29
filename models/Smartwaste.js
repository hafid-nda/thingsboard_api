module.exports = (sequelize, DataTypes) => {
    const Smartwaste = sequelize.define('Smartwaste', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
          sensor_id: {
            type: DataTypes.STRING,
            allowNull: false
          },
          dist: {
            type: DataTypes.STRING,
            allowNull: false
          },
          capacity: {
            type: DataTypes.STRING,
            allowNull: false
          },
          vol: {
            type: DataTypes.STRING,
            allowNull: false
          },
          createdAt: {
            type: DataTypes.DATE,
            allowNull: false
          },
          updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
          }

    },{
        tableName: 'smartwaste'
    });
    return Smartwaste;
}