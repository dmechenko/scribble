# == Schema Information
#
# Table name: tags
#
#  id            :bigint           not null, primary key
#  title         :string           not null
#  note_id_array :integer          default([]), is an Array
#  user_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Tag < ApplicationRecord
  validates :title, presence: true
  validates :user_id, presence: true
end
