const Campaign = require('../models/campaign');

function campaignsIndex(req, res, next){
  Campaign
    .find()
    .populate('monsters')
    .exec()
    .then(campaigns => res.status(200).json(campaigns))
    .catch(next);

}

function campaignsCreate(req, res, next){

  Campaign
    .create(req.body)
    .then(campaign => res.status(201).json(campaign))
    .catch(next);
}

function campaignsShow(req, res, next){
  Campaign
    .findById(req.params.id)
    .populate('monsters')
    .exec()
    .then(campaign => res.status(200).json(campaign))
    .catch(next);
}

function campaignsDelete(req, res, next){
  Campaign
    .findById(req.params.id)
    .exec()
    .then((campaign) => {
      if(!campaign) return res.notFound();
      return campaign.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

function campaignsUpdate(req, res, next){
  Campaign
    .findById(req.params.id)
    .exec()
    .then((campaign) => {
      Object.assign(campaign, req.body);
      return campaign.save();
    })
    .then(campaign => res.json(campaign))
    .catch(next);
}

module.exports = {
  index: campaignsIndex,
  create: campaignsCreate,
  show: campaignsShow,
  delete: campaignsDelete,
  update: campaignsUpdate
};
