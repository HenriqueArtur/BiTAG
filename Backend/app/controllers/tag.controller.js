const { Tag } = require("../models");
// const { Op } = require("sequelize");

exports.create = async (tag) => {
  try {
    const createdTag = await Tag.create(tag);
    return createdTag;
  } catch (error) {
    console.log(`Some trouble to create TAG: ${error}`);
  }
};

exports.createMany = (tags) => {
  if (tags.length > 0) {
    try {
      var tagsArray = [];
      tags.forEach(async (tag) => {
        let newTag = await Tag.create(tag);
        tagsArray.push(newTag);
      });
      return tagsArray;
    } catch (error) {
      console.log(`Some trouble to create Many TAGs: ${error}`);
    }
  } else {
    console.log("ERROR: TAGS can't be empty.");
  }
};

exports.findAll = async () => {
  let allTags = await Tag.findAll();
  return allTags;
};

exports.findById = (id) => {
  return Tag.findAll({
    where: {
      id: id,
    },
  });
};

// exports.findAll = () => {};

// exports.Update = (req, res) => {};

// exports.delete = (req, res) => {};

// exports.deleteAll = (req, res) => {};
