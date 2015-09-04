class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.string :title
      t.string :category
      t.decimal :price
      t.string :location
      t.string :color
      t.string :sex
      t.text :description
      t.string :discount

      t.timestamps null: false
    end
  end
end
