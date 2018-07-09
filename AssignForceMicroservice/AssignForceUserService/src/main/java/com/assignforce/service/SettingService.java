package com.assignforce.service;

import com.assignforce.models.Setting;
import com.assignforce.models.User;

import java.util.List;
import java.util.Optional;

public interface SettingService {
    List<Setting> getAll();
    Setting add(Setting setting);
    Setting update(Setting setting);
    Optional<Setting> getById(int id);
}

