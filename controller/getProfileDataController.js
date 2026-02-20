const Profile = require("../models/profile");

exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.findById(
      "6832fc67c345801c8f85cda3",
      { _id: 0 }, // exclude _id
    ).lean();
    if (!profile) {
      return res.status(404).send({ message: "Profile not found" });
    }

    delete profile._id; // remove _id field

    res.status(200).json(profile);
  } catch (err) {
    console.error("Error fetching profile:", err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
