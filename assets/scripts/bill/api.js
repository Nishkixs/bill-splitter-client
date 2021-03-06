'use strict';

const app = require('../app');

// Send GET request to server to get all Bills belonging to user
const indexBills = () => {
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/bills',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + token,
    }
  });
};

// Send GET request to server to get a Bill with a specific ID
const showBill = (id) => {
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/bills/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + token,
    }
  });
};

// Send POST request to server to create new Bill using form data
const createBill = (data) => {
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/bills',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + token,
    },
    data: data,
  });
};

// Send PATCH request to server to create new Bill using form data
const updateBill = (totalAmount) => {
  let id = app.bill.id;
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/bills/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + token,
    },
    data: {
      "bill": {
        "total_amount": totalAmount
      }
    },
  });
};

// send DELETE request to server to destroy Bill with specified ID.
const deleteBill = (id) => {
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/bills/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + token,
    }
  });
};

module.exports = {
  indexBills,
  showBill,
  createBill,
  updateBill,
  deleteBill,
};
