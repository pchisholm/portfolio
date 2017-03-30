/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Post from '../api/post/post.model';
import User from '../api/user/user.model';
import Link from '../api/link/link.model';

Post.find({}).remove()
  .then(() => {
    Post.create({
      created: Date.now(),
      type: 'Project',
      sub_type: 'docker',
      title: 'SVG Converter1',
      sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
      body: {"ops":
        [{"insert":"testObj"},
        {"attributes":{"list":"ordered"},"insert":"\n"},
        {"attributes":{"bold":true},"insert":"testbold"},
        {"attributes":{"list":"ordered"},"insert":"\n"},
        {"attributes":{"italic":true,"bold":true},"insert":"testital"},
        {  "attributes":{"list":"ordered"},"insert":"\n"}]}
      },
      {
      created: Date.now(),
      type: 'Project',
      sub_type: 'docker',
      title: 'SVG Converter2',
      sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
      body: {"ops":
        [{"insert":"testObj"},
        {"attributes":{"list":"ordered"},"insert":"\n"},
        {"attributes":{"bold":true},"insert":"testbold"},
        {"attributes":{"list":"ordered"},"insert":"\n"},
        {"attributes":{"italic":true,"bold":true},"insert":"testital"},
        {  "attributes":{"list":"ordered"},"insert":"\n"}]}
      },
      {
      created: Date.now(),
      type: 'Project',
      sub_type: 'docker',
      title: 'SVG Converter3',
      sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
      body: {"ops":
        [{"insert":"testObj"},
        {"attributes":{"list":"ordered"},"insert":"\n"},
        {"attributes":{"bold":true},"insert":"testbold"},
        {"attributes":{"list":"ordered"},"insert":"\n"},
        {"attributes":{"italic":true,"bold":true},"insert":"testital"},
        {  "attributes":{"list":"ordered"},"insert":"\n"}]}
      },
      {
      created: Date.now(),
      type: 'Project',
      sub_type: 'docker',
      title: 'SVG Converter4',
      sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
      body: {"ops":
        [{"insert":"testObj"},
        {"attributes":{"list":"ordered"},"insert":"\n"},
        {"attributes":{"bold":true},"insert":"testbold"},
        {"attributes":{"list":"ordered"},"insert":"\n"},
        {"attributes":{"italic":true,"bold":true},"insert":"testital"},
        {  "attributes":{"list":"ordered"},"insert":"\n"}]}
      },
      {
      created: Date.now(),
      type: 'Project',
      sub_type: 'docker',
      title: 'SVG Converter5',
      sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
      body: {"ops":
        [{"insert":"testObj"},
        {"attributes":{"list":"ordered"},"insert":"\n"},
        {"attributes":{"bold":true},"insert":"testbold"},
        {"attributes":{"list":"ordered"},"insert":"\n"},
        {"attributes":{"italic":true,"bold":true},"insert":"testital"},
        {  "attributes":{"list":"ordered"},"insert":"\n"}]}
      },
      {
      created: Date.now(),
      type: 'Project',
      sub_type: 'docker',
      title: 'SVG Converter6',
      sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
      body: {"ops":
        [{"insert":"testObj"},
        {"attributes":{"list":"ordered"},"insert":"\n"},
        {"attributes":{"bold":true},"insert":"testbold"},
        {"attributes":{"list":"ordered"},"insert":"\n"},
        {"attributes":{"italic":true,"bold":true},"insert":"testital"},
        {  "attributes":{"list":"ordered"},"insert":"\n"}]}
      },
      {
      created: Date.now(),
      type: 'Project',
      sub_type: 'docker',
      title: 'SVG Converter7',
      sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
      body: {"ops":
        [{"insert":"testObj"},
        {"attributes":{"list":"ordered"},"insert":"\n"},
        {"attributes":{"bold":true},"insert":"testbold"},
        {"attributes":{"list":"ordered"},"insert":"\n"},
        {"attributes":{"italic":true,"bold":true},"insert":"testital"},
        {  "attributes":{"list":"ordered"},"insert":"\n"}]}
      },
      {
      created: Date.now(),
      type: 'Project',
      sub_type: 'docker',
      title: 'SVG Converter8',
      sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
      body: {"ops":
        [{"insert":"testObj"},
        {"attributes":{"list":"ordered"},"insert":"\n"},
        {"attributes":{"bold":true},"insert":"testbold"},
        {"attributes":{"list":"ordered"},"insert":"\n"},
        {"attributes":{"italic":true,"bold":true},"insert":"testital"},
        {  "attributes":{"list":"ordered"},"insert":"\n"}]}
      },
      {
      created: Date.now(),
      type: 'Project',
      sub_type: 'docker',
      title: 'SVG Converter9',
      sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
      body: {"ops":
        [{"insert":"testObj"},
        {"attributes":{"list":"ordered"},"insert":"\n"},
        {"attributes":{"bold":true},"insert":"testbold"},
        {"attributes":{"list":"ordered"},"insert":"\n"},
        {"attributes":{"italic":true,"bold":true},"insert":"testital"},
        {  "attributes":{"list":"ordered"},"insert":"\n"}]}
      },
      {
      created: Date.now(),
      type: 'Project',
      sub_type: 'docker',
      title: 'SVG Converter10',
      sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
      body: {"ops":
        [{"insert":"testObj"},
        {"attributes":{"list":"ordered"},"insert":"\n"},
        {"attributes":{"bold":true},"insert":"testbold"},
        {"attributes":{"list":"ordered"},"insert":"\n"},
        {"attributes":{"italic":true,"bold":true},"insert":"testital"},
        {  "attributes":{"list":"ordered"},"insert":"\n"}]}
      },{
        created: Date.now(),
        type: 'Project',
        sub_type: 'docker',
        title: 'SVG Converter11',
        sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
        body: {"ops":
          [{"insert":"testObj"},
          {"attributes":{"list":"ordered"},"insert":"\n"},
          {"attributes":{"bold":true},"insert":"testbold"},
          {"attributes":{"list":"ordered"},"insert":"\n"},
          {"attributes":{"italic":true,"bold":true},"insert":"testital"},
          {  "attributes":{"list":"ordered"},"insert":"\n"}]}
        },
        {
        created: Date.now(),
        type: 'Project',
        sub_type: 'docker',
        title: 'SVG Converter12',
        sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
        body: {"ops":
          [{"insert":"testObj"},
          {"attributes":{"list":"ordered"},"insert":"\n"},
          {"attributes":{"bold":true},"insert":"testbold"},
          {"attributes":{"list":"ordered"},"insert":"\n"},
          {"attributes":{"italic":true,"bold":true},"insert":"testital"},
          {  "attributes":{"list":"ordered"},"insert":"\n"}]}
        },
        {
        created: Date.now(),
        type: 'Project',
        sub_type: 'docker',
        title: 'SVG Converter13',
        sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
        body: {"ops":
          [{"insert":"testObj"},
          {"attributes":{"list":"ordered"},"insert":"\n"},
          {"attributes":{"bold":true},"insert":"testbold"},
          {"attributes":{"list":"ordered"},"insert":"\n"},
          {"attributes":{"italic":true,"bold":true},"insert":"testital"},
          {  "attributes":{"list":"ordered"},"insert":"\n"}]}
        },
        {
        created: Date.now(),
        type: 'Project',
        sub_type: 'docker',
        title: 'SVG Converter14',
        sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
        body: {"ops":
          [{"insert":"testObj"},
          {"attributes":{"list":"ordered"},"insert":"\n"},
          {"attributes":{"bold":true},"insert":"testbold"},
          {"attributes":{"list":"ordered"},"insert":"\n"},
          {"attributes":{"italic":true,"bold":true},"insert":"testital"},
          {  "attributes":{"list":"ordered"},"insert":"\n"}]}
        },
        {
        created: Date.now(),
        type: 'Project',
        sub_type: 'docker',
        title: 'SVG Converter15',
        sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
        body: {"ops":
          [{"insert":"testObj"},
          {"attributes":{"list":"ordered"},"insert":"\n"},
          {"attributes":{"bold":true},"insert":"testbold"},
          {"attributes":{"list":"ordered"},"insert":"\n"},
          {"attributes":{"italic":true,"bold":true},"insert":"testital"},
          {  "attributes":{"list":"ordered"},"insert":"\n"}]}
        },
        {
        created: Date.now(),
        type: 'Project',
        sub_type: 'docker',
        title: 'SVG Converter16',
        sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
        body: {"ops":
          [{"insert":"testObj"},
          {"attributes":{"list":"ordered"},"insert":"\n"},
          {"attributes":{"bold":true},"insert":"testbold"},
          {"attributes":{"list":"ordered"},"insert":"\n"},
          {"attributes":{"italic":true,"bold":true},"insert":"testital"},
          {  "attributes":{"list":"ordered"},"insert":"\n"}]}
        },
        {
        created: Date.now(),
        type: 'Project',
        sub_type: 'docker',
        title: 'SVG Converter17',
        sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
        body: {"ops":
          [{"insert":"testObj"},
          {"attributes":{"list":"ordered"},"insert":"\n"},
          {"attributes":{"bold":true},"insert":"testbold"},
          {"attributes":{"list":"ordered"},"insert":"\n"},
          {"attributes":{"italic":true,"bold":true},"insert":"testital"},
          {  "attributes":{"list":"ordered"},"insert":"\n"}]}
        },
        {
        created: Date.now(),
        type: 'Project',
        sub_type: 'docker',
        title: 'SVG Converter18',
        sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
        body: {"ops":
          [{"insert":"testObj"},
          {"attributes":{"list":"ordered"},"insert":"\n"},
          {"attributes":{"bold":true},"insert":"testbold"},
          {"attributes":{"list":"ordered"},"insert":"\n"},
          {"attributes":{"italic":true,"bold":true},"insert":"testital"},
          {  "attributes":{"list":"ordered"},"insert":"\n"}]}
        },
        {
        created: Date.now(),
        type: 'Project',
        sub_type: 'docker',
        title: 'SVG Converter19',
        sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
        body: {"ops":
          [{"insert":"testObj"},
          {"attributes":{"list":"ordered"},"insert":"\n"},
          {"attributes":{"bold":true},"insert":"testbold"},
          {"attributes":{"list":"ordered"},"insert":"\n"},
          {"attributes":{"italic":true,"bold":true},"insert":"testital"},
          {  "attributes":{"list":"ordered"},"insert":"\n"}]}
        },
        {
        created: Date.now(),
        type: 'Project',
        sub_type: 'docker',
        title: 'SVG Converter20',
        sub_title: 'Quick way to deal with HTML5 canvas elements that have transparent backgrounds when converting to base64.',
        body: {"ops":
          [{"insert":"testObj"},
          {"attributes":{"list":"ordered"},"insert":"\n"},
          {"attributes":{"bold":true},"insert":"testbold"},
          {"attributes":{"list":"ordered"},"insert":"\n"},
          {"attributes":{"italic":true,"bold":true},"insert":"testital"},
          {  "attributes":{"list":"ordered"},"insert":"\n"}]}
        });
    });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
